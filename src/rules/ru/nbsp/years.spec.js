tests.push(['ru/nbsp/years', [
    ['2012-2015 г. г. ', '2012-2015\u00A0гг. '],
    ['2012-2015 г. г.\n2012-2015 г. г.', '2012-2015\u00A0гг.\n2012-2015\u00A0гг.'],
    ['2012-2015г.г. ', '2012-2015\u00A0гг. '],
    ['2012-2015 годы \n 2022-2025 годы\n', '2012-2015 годы \n 2022-2025 годы\n'],
    ['2012-2015 годы, \n 2022-2025 годы\n', '2012-2015 годы, \n 2022-2025 годы\n']
]]);
