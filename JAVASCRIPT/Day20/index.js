
// async function always returns a Promise
async function greet() {
    return "Ankit";
}

greet()
.then((data) => console.log(data))
.catch((error) => console.log("Error:", error));

// GitHub API using async/await
async function github() {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();

    const parent = document.querySelector(".first");

    for (let user of data) {
        const element = document.createElement("div");
        element.classList.add("user");

        const image = document.createElement("img");
        image.src = user.avatar_url;

        const userName = document.createElement("h2");
        userName.textContent = user.login;

        const anchor = document.createElement("a");
        anchor.href = user.html_url;
        anchor.textContent = "Visit Profile";
        anchor.target = "_blank";

        element.append(image, userName, anchor);
        parent.append(element); // 🔥 IMPORTANT
    }
}

github();


