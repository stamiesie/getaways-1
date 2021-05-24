
export const registerUser = async (username, email, password) => {
    const res = await fetch(`${process.env.BASE_URL}/users/create`, {
    method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    body: JSON.stringify({
        username: username,
        email: email,
        password: password,
    }),
    });
    const json = await res.json();
    console.log('json', json)
    return json;
}