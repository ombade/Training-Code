
enum Category {
    Food = 'Food',
    Travel = 'Travel',
    Bills = 'Bills',
    Shopping = 'Shopping',
    Other = 'Other'
  }
  
  
  interface Expense {
    id: string;
    amount: number;
    category: Category;
    date: string;
    description: string;
  }

  class ExpenseTracker {
    private expenses: Expense[];
    private static instance: ExpenseTracker;
  
    private constructor() {
      this.expenses = this.loadFromLocalStorage();
    }
  
    public static getInstance(): ExpenseTracker {
      if (!ExpenseTracker.instance) {
        ExpenseTracker.instance = new ExpenseTracker();
      }
      return ExpenseTracker.instance;
    }
  
    private loadFromLocalStorage(): Expense[] {
      const data = localStorage.getItem('expenses');
      return data ? JSON.parse(data) : [];
    }
  
    private saveToLocalStorage(): void {
      localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }
  
    public addExpense(expense: Omit<Expense, 'id'>): void {
      const newExpense: Expense = {
        id: Date.now().toString(),
        ...expense
      };
      this.expenses.push(newExpense);
      this.saveToLocalStorage();
    }
  
    public getExpenses(filters?: { category?: Category; startDate?: string; endDate?: string }): Expense[] {
      return this.expenses.filter(expense => {
        if (filters?.category && expense.category !== filters.category) return false;
        if (filters?.startDate && expense.date < filters.startDate) return false;
        if (filters?.endDate && expense.date > filters.endDate) return false;
        return true;
      });
    }
  }
  
  // UI Controller
  class ExpenseUI {
    private tracker = ExpenseTracker.getInstance();
  
    init() {
      this.setupEventListeners();
      this.renderExpenses();
    }
  
    private setupEventListeners() {
      document.getElementById('expense-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit();
      });
  
      document.getElementById('category-filter')?.addEventListener('change', () => this.renderExpenses());
      document.getElementById('date-filter')?.addEventListener('change', () => this.renderExpenses());
    }
  
    private handleFormSubmit() {
      const amountInput = document.getElementById('amount') as HTMLInputElement;
      const categorySelect = document.getElementById('category') as HTMLSelectElement;
      const dateInput = document.getElementById('date') as HTMLInputElement;
      const descriptionInput = document.getElementById('description') as HTMLInputElement;
  
      const newExpense = {
        amount: parseFloat(amountInput.value),
        category: categorySelect.value as Category,
        date: dateInput.value,
        description: descriptionInput.value
      };
  
      this.tracker.addExpense(newExpense);
      this.renderExpenses();
      this.clearForm();
    }
  
    private renderExpenses() {
      const expensesList = document.getElementById('expenses-list');
      if (!expensesList) return;
  
      const categoryFilter = (document.getElementById('category-filter') as HTMLSelectElement).value;
      const dateFilter = (document.getElementById('date-filter') as HTMLInputElement).value;
  
      const filters = {
        category: categoryFilter ? categoryFilter as Category : undefined,
        startDate: dateFilter || undefined
      };
  
      const expenses = this.tracker.getExpenses(filters);
      
      expensesList.innerHTML = expenses
        .map(expense => `
          <div class="expense-item">
            <p>${expense.description}</p>
            <p>Amount: $${expense.amount.toFixed(2)}</p>
            <p>Category: ${expense.category}</p>
            <p>Date: ${new Date(expense.date).toLocaleDateString()}</p>
          </div>
        `).join('');
    }
  
    private clearForm() {
      (document.getElementById('expense-form') as HTMLFormElement).reset();
    }
  }
  
  const ui = new ExpenseUI();
  ui.init();