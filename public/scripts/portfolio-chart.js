// portfolio-chart.js

const industryTotals = {}; // Object to store total prices for each industry

 stock.savedStockList.forEach(stockItem => { 
    // Aggregate total prices for each industry
    if (industryTotals[' stockItem.industry '] === undefined) {
        industryTotals[' stockItem.industry '] = {
            totalPrice:  stockItem.totalPrice,
            stocks: [' stockItem.stockName '] // Initialize array with stock name
        };
    } else {
        industryTotals[' stockItem.industry'].totalPrice += stockItem.totalPrice ;
        industryTotals[' stockItem.industry '].stocks.push(' stockItem.stockName '); // Add stock name to array
    }
 });

// Calculate percentages based on total prices for each industry
const percentages = Object.values(industryTotals).map(industry => {
    return ((industry.totalPrice /  stock.totalPrice ) * 100).toFixed(2);
});
const labels = Object.keys(industryTotals);

// Create the chart
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: 'Industry Percentage',
            data: percentages,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    generateLabels: function(chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            return data.labels.map((label, index) => {
                                const dataset = data.datasets[0];
                                return {
                                    text: label + ': ' + dataset.data[index] + '%',
                                    fillStyle: dataset.backgroundColor[index]
                                };
                            });
                        }
                        return [];
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const stocks = industryTotals[labels[context.dataIndex]].stocks.join(', '); // Retrieve stocks for the hovered industry
                        return label + ' (' + stocks + ')';
                    }
                }
            }
        }
    }
});
