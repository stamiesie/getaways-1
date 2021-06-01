
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
    // const json = await res.json();

    const [ ok, json ] = await Promise.all([res.ok, res.json()])
    if(!ok) throw json;
    // console.log('json', json)
    return json;
}

export const loginUser = async (username, email, password) => {
    const res = await fetch(`${process.env.BASE_URL}/users/login`, {
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
    const [ ok, json ] = await Promise.all([res.ok, res.json()])
    if(!ok) throw json;
    
    // console.log('login', json)
    return json;
}

export const logoutUser = async () => {
    const res = await fetch(`${process.env.BASE_URL}/users/logout`, {
    method: 'GET',
    });
    const json = await res.json();
    console.log('logout', json)
    // return json;
}

export const editUser = async (id) => {
    const res = await fetch(`${process.env.BASE_URL}/users/${id}`, {
    method: 'PUT',
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
    console.log('PUT', json)
    // return json;
}