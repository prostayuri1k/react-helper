export const codeSetLocalStorageData = 'localStorage.setItem(\'myData\', \'Hello, Redev!\');';

export const codeGetLocalStorageData = 'const myData = localStorage.getItem(\'myData\');\n' +
    'console.log(myData); // Выводится "Hello, Redev!"';

export const codeSetupCookie = '// Установка cookie на определенное количество дней\n' +
    'document.cookie = "user_id=123; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";';

export const codeGetCookie = '// Получение всех cookie в виде строки\n' +
    'const allCookies = document.cookie;\n' +
    '\n' +
    '// Разбивка строки на отдельные cookie\n' +
    'const cookiesArray = allCookies.split("; ");\n' +
    'const cookies = {};\n' +
    'cookiesArray.forEach(cookie => {\n' +
    '  const [name, value] = cookie.split("=");\n' +
    '  cookies[name] = value;\n' +
    '});';

export const codeDeleteCookie = '// Удаление cookie путем установки срока действия в прошлое\n' +
    'document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";';
