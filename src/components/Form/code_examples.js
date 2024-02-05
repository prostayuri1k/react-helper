export const codeRHForm = 'import {Controller, useForm} from "react-hook-form";\n' +
    'import React from \'react\';\n' +
    'import {Button, Input, DatePicker, Radio} from "antd";\n' +
    '\n' +
    'const RhForm = () => {\n' +
    '\n' +
    '    const {control, handleSubmit, formState: {errors}} = useForm();\n' +
    '    const onSubmit = (data) => {\n' +
    '        console.log(JSON.stringify(data));\n' +
    '        alert(\'Успешно зарегистрировано\');\n' +
    '    };\n' +
    '\n' +
    '    return (\n' +
    '        <div className=\'form\'>\n' +
    '            <form onSubmit={handleSubmit(onSubmit)}>\n' +
    '                <label>\n' +
    '                    Имя пользователя\n' +
    '                </label>\n' +
    '                <Controller\n' +
    '                    control={control}\n' +
    '                    name=\'name\'\n' +
    '                    rules={{\n' +
    '                        required: \'Поле обязательно для заполнения\',\n' +
    '                    }}\n' +
    '                    render={({field}) => <Input rootClassName=\'input\' {...field} placeholder="Имя пользователя"/>}\n' +
    '                />\n' +
    '                <p>{errors.name?.message}</p>\n' +
    '\n' +
    '                <label>Email</label>\n' +
    '                <Controller\n' +
    '                    control={control}\n' +
    '                    name=\'email\'\n' +
    '                    rules={{\n' +
    '                        required: \'Поле обязательно для заполнения\',\n' +
    '                        pattern: {\n' +
    '                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$/,\n' +
    '                            message: \'Введите корректный email\'\n' +
    '                        }\n' +
    '                    }}\n' +
    '                    render={({field}) => <Input rootClassName=\'input\' {...field} placeholder="email"/>}\n' +
    '                />\n' +
    '                <p>{errors.email?.message}</p>\n' +
    '\n' +
    '                <label>Пароль</label>\n' +
    '                <Controller\n' +
    '                    control={control}\n' +
    '                    name=\'password\'\n' +
    '                    rules={{\n' +
    '                        required: \'Поле обязательно для заполнения\',\n' +
    '                        minLength: {\n' +
    '                            value: 6,\n' +
    '                            message: \'Минимальная длина 6 символов\'\n' +
    '                        },\n' +
    '                        pattern: {\n' +
    '                            value: /(?=.*[A-Z])/,\n' +
    '                            message: \'Пароль должен содержать хотя бы одну заглавную букву\'\n' +
    '                        }\n' +
    '                    }}\n' +
    '                    render={({field}) => <Input.Password rootClassName=\'input\' {...field} placeholder="password"/>}\n' +
    '                />\n' +
    '                <p>{errors.password?.message}</p>\n' +
    '\n' +
    '                <label>Повторите пароль</label>\n' +
    '                <Controller\n' +
    '                    control={control}\n' +
    '                    name=\'repeatPassword\'\n' +
    '                    rules={{\n' +
    '                        required: \'Поле обязательно для заполнения\',\n' +
    '                        validate: (value, formValues) => {\n' +
    '                            return value === formValues.password || \'Пароли не совпадают\';\n' +
    '                        }\n' +
    '                    }}\n' +
    '                    render={({field}) => <Input rootClassName=\'input\' type=\'password\'{...field} placeholder=" repeat password"/>}\n' +
    '                />\n' +
    '                <p>{errors.repeatPassword?.message}</p>\n' +
    '\n' +
    '                <label>Дата рождения</label>\n' +
    '                <Controller\n' +
    '                    control={control}\n' +
    '                    name=\'birthday\'\n' +
    '                    rules={{\n' +
    '                        required: \'Поле обязательно для заполнения\'\n' +
    '                    }}\n' +
    '                    render={({field}) => <DatePicker {...field} />}\n' +
    '                />\n' +
    '                <p>{errors.birthday?.message}</p>\n' +
    '\n' +
    '                <label> Ваш пол:</label>\n' +
    '                <Controller\n' +
    '                    control={control}\n' +
    '                    rules={{\n' +
    '                        required: \'Поле обязательно для заполнения\'\n' +
    '                    }}\n' +
    '                    render={({field}) => (\n' +
    '                        <Radio.Group {...field}>\n' +
    '                            <Radio value=\'male\'>Мужской</Radio>\n' +
    '                            <Radio value=\'female\'>Женский</Radio>\n' +
    '                        </Radio.Group>\n' +
    '                    )}\n' +
    '                    name=\'gender\'\n' +
    '                />\n' +
    '                <p>{errors.gender?.message}</p>\n' +
    '\n' +
    '                <label>Телефон:</label>\n' +
    '                <Controller\n' +
    '                    rules={{\n' +
    '                        required: \'Поле обязательно для заполнения\'\n' +
    '                    }}\n' +
    '                    control={control}\n' +
    '                    render={({field}) =>\n' +
    '                        <Input rootClassName=\'input\' placeholder=\'+375291234567\' {...field} />\n' +
    '                    }\n' +
    '                    name=\'phone\'\n' +
    '                />\n' +
    '                <p>{errors.phone?.message}</p>\n' +
    '\n' +
    '                <Button type=\'primary\' htmlType=\'submit\'>\n' +
    '                    Зарегистрироваться\n' +
    '                </Button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    );\n' +
    '};\n' +
    '\n' +
    'export default RhForm;';

export const codeFormik = ' import React from \'react\';\n' +
    ' import { Formik, Form, Field, ErrorMessage } from \'formik\';\n' +
    ' \n' +
    ' const Basic = () => (\n' +
    '   <div>\n' +
    '     <h1>Any place in your app!</h1>\n' +
    '     <Formik\n' +
    '       initialValues={{ email: \'\', password: \'\' }}\n' +
    '       validate={values => {\n' +
    '         const errors = {};\n' +
    '         if (!values.email) {\n' +
    '           errors.email = \'Required\';\n' +
    '         } else if (\n' +
    '           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(values.email)\n' +
    '         ) {\n' +
    '           errors.email = \'Invalid email address\';\n' +
    '         }\n' +
    '         return errors;\n' +
    '       }}\n' +
    '       onSubmit={(values, { setSubmitting }) => {\n' +
    '         setTimeout(() => {\n' +
    '           alert(JSON.stringify(values, null, 2));\n' +
    '           setSubmitting(false);\n' +
    '         }, 400);\n' +
    '       }}\n' +
    '     >\n' +
    '       {({ isSubmitting }) => (\n' +
    '         <Form>\n' +
    '           <Field type="email" name="email" />\n' +
    '           <ErrorMessage name="email" component="div" />\n' +
    '           <Field type="password" name="password" />\n' +
    '           <ErrorMessage name="password" component="div" />\n' +
    '           <button type="submit" disabled={isSubmitting}>\n' +
    '             Submit\n' +
    '           </button>\n' +
    '         </Form>\n' +
    '       )}\n' +
    '     </Formik>\n' +
    '   </div>\n' +
    ' );\n' +
    ' \n' +
    ' export default Basic;';