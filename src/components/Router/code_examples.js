export const codeBrowserRouter = 'import React from \'react\';\n' +
    'import ReactDOM from \'react-dom\';\n' +
    'import { BrowserRouter } from \'react-router-dom\';\n' +
    'import App from \'./App\';\n' +
    '\n' +
    'ReactDOM.render(\n' +
    '  <BrowserRouter>\n' +
    '    <App />\n' +
    '  </BrowserRouter>,\n' +
    '  document.getElementById(\'root\')\n' +
    ');'

export const codeRoutes = 'import { Routes, Route } from \'react-router-dom\';\n' +
    '\n' +
    '// ...\n' +
    '\n' +
    '<Routes>\n' +
    '  <Route path="/" element={<Home />} />\n' +
    '  <Route path="/about" element={<About />} />\n' +
    '  <Route path="/contact" element={<Contact />} />\n' +
    '</Routes>'

export const codeRoute = 'import { Routes, Route } from \'react-router-dom\';\n' +
    '\n' +
    '// ...\n' +
    '\n' +
    '<Routes>\n' +
    '  <Route path="/" element={<Home />} />\n' +
    '  <Route path="/about" element={<About />} />\n' +
    '  <Route path="/contact" element={<Contact />} />\n' +
    '</Routes>'

export const codeLink = 'import { Link } from \'react-router-dom\';\n' +
    '\n' +
    '// ..\n' +
    '\n' +
    '<Link to="/">Главная</Link>\n' +
    '<Link to="/about">О нас</Link>\n' +
    '<Link to="/contact">Контакты</Link>'

export const codeNAvLink = 'import { NavLink } from \'react-router-dom\';\n' +
    '\n' +
    '// ...\n' +
    '\n' +
    '<NavLink to="/" activeClassName="active">Главная</NavLink>\n' +
    '<NavLink to="/about" activeClassName="active">О нас</NavLink>\n' +
    '<NavLink to="/contact" activeClassName="active">Контакты</NavLink>'

export const codeUseNavigate = 'import { useNavigate } from \'react-router-dom\';\n' +
    '\n' +
    '// ...\n' +
    '\n' +
    'const Home = () => {\n' +
    '  const navigate = useNavigate();\n' +
    '\n' +
    '  const handleClick = () => {\n' +
    '    navigate(\'/about\');\n' +
    '  };\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h1>Домашняя страница</h1>\n' +
    '      <button onClick={handleClick}>Перейти к странице О нас</button>\n' +
    '    </div>\n' +
    '  );\n' +
    '};'

export const codeUseParams = 'import { useParams } from \'react-router-dom\';\n' +
    '\n' +
    '// ...\n' +
    '\n' +
    'const UserProfile = () => {\n' +
    '  const params = useParams();\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h1>Профиль пользователя: {params.username}</h1>\n' +
    '    </div>\n' +
    '  );\n' +
    '};'

export const codeUseLocation = 'import { useLocation } from \'react-router-dom\';\n' +
    '\n' +
    '// ...\n' +
    '\n' +
    'const Page = () => {\n' +
    '  const location = useLocation();\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h1>Текущий URL: {location.pathname}</h1>\n' +
    '    </div>\n' +
    '  );\n' +
    '};'

export const codeOutlet = 'import { Outlet } from \'react-router-dom\';\n' +
    '\n' +
    '// ...\n' +
    '\n' +
    'const App = () => {\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h1>Мое приложение</h1>\n' +
    '      <nav>\n' +
    '        {/* Навигационные ссылки */}\n' +
    '      </nav>\n' +
    '      <div>\n' +
    '        <Outlet />\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  );\n' +
    '};'

export const codeSimpleRoutes = 'import { Routes, Route } from \'react-router-dom\';\n' +
    '\n' +
    'const App = () => {\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h1>Мое приложение</h1>\n' +
    '      <Routes>\n' +
    '        <Route path="/" element={<HomePage />} />\n' +
    '        <Route path="/about" element={<AboutPage />} />\n' +
    '        <Route path="/contact" element={<ContactPage />} />\n' +
    '      </Routes>\n' +
    '    </div>\n' +
    '  );\n' +
    '};'

export const codeDefRouteParam = '<Route path="/users/:id" element={<UserDetailPage />} />'

export const codeUseRouteParam = 'import { useParams } from \'react-router-dom\';\n' +
    '\n' +
    'const UserDetailPage = () => {\n' +
    '  const { id } = useParams();\n' +
    '\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h2>Детали пользователя с ID {id}</h2>\n' +
    '      {/* Дополнительный контент */}\n' +
    '    </div>\n' +
    '  );\n' +
    '};'

export const codeExampleRouteParam = '<Routes>\n' +
    '  <Route path="/users/:id" element={<UserDetailPage />} />\n' +
    '  <Route path="/products/:productId" element={<ProductDetailPage />} />\n' +
    '</Routes>'

export const codeNestedRoutes1 = 'import { Routes, Route } from \'react-router-dom\';\n' +
    '\n' +
    'const App = () => {\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h1>Мое приложение</h1>\n' +
    '      <Routes>\n' +
    '        <Route path="/" element={<HomePage />} />\n' +
    '        <Route path="/about" element={<AboutPage />} />\n' +
    '        <Route path="/products" element={<ProductsPage />}>\n' +
    '          <Route path="/" element={<AllProducts />} />\n' +
    '          <Route path="/:id" element={<ProductDetail />} />\n' +
    '        </Route>\n' +
    '        <Route path="/contact" element={<ContactPage />} />\n' +
    '      </Routes>\n' +
    '    </div>\n' +
    '  );\n' +
    '};'

export const codeNestedRoutes2 = 'const ProductsPage = () => {\n' +
    '  return (\n' +
    '    <div>\n' +
    '      <h2>Страница продуктов</h2>\n' +
    '      <ul>\n' +
    '        <li>\n' +
    '          <Link to="/">Все продукты</Link>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <Link to="/products/1">Продукт 1</Link>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <Link to="/products/2">Продукт 2</Link>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '      <Outlet />\n' +
    '    </div>\n' +
    '  );\n' +
    '};'

export const codePrivateRoutes1 = 'import { Route, Navigate } from \'react-router-dom\';\n' +
    '\n' +
    'const PrivateRoute = ({ ...props }) => {\n' +
    '  const isAuth = // Логика проверки аутентификации пользователя\n' +
    '  return isAuth ? <Route {...props} /> : <Navigate to="/login" replace />;\n' +
    '};'

export const codePrivateRoutes2 = 'import { BrowserRouter as Router, Routes, Route } from \'react-router-dom\';\n' +
    '\n' +
    'const App = () => {\n' +
    '\n' +
    '  return (\n' +
    '    <Router>\n' +
    '      <Routes>\n' +
    '        <Route path="/login" element={<LoginPage />} />\n' +
    '        <PrivateRoute path="/dashboard" element={<DashboardPage />} />\n' +
    '      </Routes>\n' +
    '    </Router>\n' +
    '  );\n' +
    '};'