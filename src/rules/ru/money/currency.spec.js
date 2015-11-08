tests.push(['ru/money/currency', [
    ['100$', '100\u00A0$'],
    ['100 $', '100\u00A0$'],
    ['$100 000', '100 000\u00A0$'],
    ['$100 000 000', '100 000 000\u00A0$'],
    ['YouTube-блогер попросил $22 000 за обзор игры', 'YouTube-блогер попросил 22 000\u00A0$ за обзор игры'],
    ['У меня есть $2!', 'У меня есть 2\u00A0$!'],
    ['У меня есть $2.5!', 'У меня есть 2.5\u00A0$!'],
    ['У меня есть $ 2!', 'У меня есть 2\u00A0$!'],
    ['У меня есть $ 2.5!', 'У меня есть 2.5\u00A0$!'],
    ['У меня есть $ 2.5! У тебя есть $ 4.5!', 'У меня есть 2.5\u00A0$! У тебя есть 4.5\u00A0$!'],
    ['20 $ 30 центов', '20\u00A0$ 30 центов'],
    ['100€', '100\u00A0€'],
    ['100 €', '100\u00A0€'],
    ['€100 000', '100 000\u00A0€'],
    ['€100 000 000', '100 000 000\u00A0€'],
    ['У меня есть €2!', 'У меня есть 2\u00A0€!'],
    ['У меня есть €2.5!', 'У меня есть 2.5\u00A0€!'],
    ['У меня есть € 2!', 'У меня есть 2\u00A0€!'],
    ['У меня есть € 2.5!', 'У меня есть 2.5\u00A0€!'],
    ['У меня есть € 2.5! У тебя есть € 2.5!', 'У меня есть 2.5\u00A0€! У тебя есть 2.5\u00A0€!'],
    ['20 € 30 центов', '20\u00A0€ 30 центов']
]]);
