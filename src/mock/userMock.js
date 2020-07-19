import mock from "../utils/mock";

mock.onPost("/api/home/login").reply((config) => {
    const { email, password } = JSON.parse(config.data);

    if (email !== "andreollem@gmail.com" || password !== "admin") {
        return [400, { message: "Seu email ou senha estão incorretos!" }];
    }

    const user = {
        id: 1,
        name: "André Mello",
        username: "andreollem",
        email: "andreollem@gmail.com",
    };

    return [200, { user }];
});
