const btns = document.querySelectorAll('.btn');
const display = document.querySelector('.display');

let expr = '';

const updateDisplay = () => {
    display.value = expr || '';
};

const isOperator = (ch) => /[+\-*/]/.test(ch);

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.dataset.value || btn.id || btn.innerText;

        if (btn.id === 'clear' || val === 'C') {
            expr = '';
            updateDisplay();
            return;
        }

        if (btn.id === 'equals' || val === '=') {
            if (!expr) return;
            try {
                // Evaluate safely using Function constructor
                // disallow trailing operators
                let safeExpr = expr;
                while (safeExpr && isOperator(safeExpr.slice(-1))) {
                    safeExpr = safeExpr.slice(0, -1);
                }
                const result = Function('return (' + safeExpr + ')')();
                expr = String(result);
            } catch (e) {
                expr = 'Error';
            }
            updateDisplay();
            return;
        }

        // Percent handling: convert last number to percentage
        if (val === '%') {
            const match = expr.match(/(\d*\.?\d+)$/);
            if (match) {
                const num = parseFloat(match[0]);
                const pct = String(num / 100);
                expr = expr.slice(0, -match[0].length) + pct;
                updateDisplay();
            }
            return;
        }

        // Decimal: prevent multiple decimals in current number
        if (val === '.') {
            const match = expr.match(/(\d*\.?\d*)$/);
            if (match && match[0].includes('.')) return;
            if (expr === '' || isOperator(expr.slice(-1))) {
                expr += '0.'; // start a decimal number
            } else {
                expr += '.';
            }
            updateDisplay();
            return;
        }

        // Operators: avoid duplicate operators
        if (isOperator(val)) {
            if (!expr) return; // don't start with operator (except '-')
            if (isOperator(expr.slice(-1))) {
                // replace last operator
                expr = expr.slice(0, -1) + val;
            } else {
                expr += val;
            }
            updateDisplay();
            return;
        }

        // Numbers
        expr += String(val);
        updateDisplay();
    });
});

// Keyboard support
window.addEventListener('keydown', (e) => {
    const key = e.key;
    if ((/^[0-9]$/).test(key)) {
        expr += key;
        updateDisplay();
        return;
    }
    if (key === 'Enter') {
        e.preventDefault();
        try {
            let safeExpr = expr;
            while (safeExpr && isOperator(safeExpr.slice(-1))) safeExpr = safeExpr.slice(0, -1);
            const result = Function('return (' + safeExpr + ')')();
            expr = String(result);
        } catch {
            expr = 'Error';
        }
        updateDisplay();
        return;
    }
    if (key === 'Backspace') {
        expr = expr.slice(0, -1);
        updateDisplay();
        return;
    }
    if (key === 'Escape') {
        expr = '';
        updateDisplay();
        return;
    }
    if (['+', '-', '*', '/'].includes(key)) {
        if (!expr) return;
        if (isOperator(expr.slice(-1))) expr = expr.slice(0, -1) + key; else expr += key;
        updateDisplay();
        return;
    }
    if (key === '%') {
        const match = expr.match(/(\d*\.?\d+)$/);
        if (match) {
            const num = parseFloat(match[0]);
            const pct = String(num / 100);
            expr = expr.slice(0, -match[0].length) + pct;
            updateDisplay();
        }
        return;
    }
    if (key === '.') {
        const match = expr.match(/(\d*\.?\d*)$/);
        if (match && match[0].includes('.')) return;
        if (expr === '' || isOperator(expr.slice(-1))) expr += '0.'; else expr += '.';
        updateDisplay();
        return;
    }
});

// Initialize
updateDisplay();

