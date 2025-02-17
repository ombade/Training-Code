var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Define Category enum
var Category;
(function (Category) {
    Category["Food"] = "Food";
    Category["Travel"] = "Travel";
    Category["Bills"] = "Bills";
    Category["Shopping"] = "Shopping";
    Category["Other"] = "Other";
})(Category || (Category = {}));

var ExpenseTracker = /** @class */ (function () {
    function ExpenseTracker() {
        this.expenses = this.loadFromLocalStorage();
    }
    ExpenseTracker.getInstance = function () {
        if (!ExpenseTracker.instance) {
            ExpenseTracker.instance = new ExpenseTracker();
        }
        return ExpenseTracker.instance;
    };
    ExpenseTracker.prototype.loadFromLocalStorage = function () {
        var data = localStorage.getItem('expenses');
        return data ? JSON.parse(data) : [];
    };
    ExpenseTracker.prototype.saveToLocalStorage = function () {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    };
    ExpenseTracker.prototype.addExpense = function (expense) {
        var newExpense = __assign({ id: Date.now().toString() }, expense);
        this.expenses.push(newExpense);
        this.saveToLocalStorage();
    };
    ExpenseTracker.prototype.getExpenses = function (filters) {
        return this.expenses.filter(function (expense) {
            if ((filters === null || filters === void 0 ? void 0 : filters.category) && expense.category !== filters.category)
                return false;
            if ((filters === null || filters === void 0 ? void 0 : filters.startDate) && expense.date < filters.startDate)
                return false;
            if ((filters === null || filters === void 0 ? void 0 : filters.endDate) && expense.date > filters.endDate)
                return false;
            return true;
        });
    };
    return ExpenseTracker;
}());
// UI Controller
var ExpenseUI = /** @class */ (function () {
    function ExpenseUI() {
        this.tracker = ExpenseTracker.getInstance();
    }
    ExpenseUI.prototype.init = function () {
        this.setupEventListeners();
        this.renderExpenses();
    };
    ExpenseUI.prototype.setupEventListeners = function () {
        var _this = this;
        var _a, _b, _c;
        (_a = document.getElementById('expense-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
            e.preventDefault();
            _this.handleFormSubmit();
        });
        (_b = document.getElementById('category-filter')) === null || _b === void 0 ? void 0 : _b.addEventListener('change', function () { return _this.renderExpenses(); });
        (_c = document.getElementById('date-filter')) === null || _c === void 0 ? void 0 : _c.addEventListener('change', function () { return _this.renderExpenses(); });
    };
    ExpenseUI.prototype.handleFormSubmit = function () {
        var amountInput = document.getElementById('amount');
        var categorySelect = document.getElementById('category');
        var dateInput = document.getElementById('date');
        var descriptionInput = document.getElementById('description');
        var newExpense = {
            amount: parseFloat(amountInput.value),
            category: categorySelect.value,
            date: dateInput.value,
            description: descriptionInput.value
        };
        this.tracker.addExpense(newExpense);
        this.renderExpenses();
        this.clearForm();
    };
    ExpenseUI.prototype.renderExpenses = function () {
        var expensesList = document.getElementById('expenses-list');
        if (!expensesList)
            return;
        var categoryFilter = document.getElementById('category-filter').value;
        var dateFilter = document.getElementById('date-filter').value;
        var filters = {
            category: categoryFilter ? categoryFilter : undefined,
            startDate: dateFilter || undefined
        };
        var expenses = this.tracker.getExpenses(filters);
        expensesList.innerHTML = expenses
            .map(function (expense) { return "\n          <div class=\"expense-item\">\n            <p>".concat(expense.description, "</p>\n            <p>Amount: $").concat(expense.amount.toFixed(2), "</p>\n            <p>Category: ").concat(expense.category, "</p>\n            <p>Date: ").concat(new Date(expense.date).toLocaleDateString(), "</p>\n          </div>\n        "); }).join('');
    };
    ExpenseUI.prototype.clearForm = function () {
        document.getElementById('expense-form').reset();
    };
    return ExpenseUI;
}());
// Initialize App
var ui = new ExpenseUI();
ui.init();
