function fn() {
    const name = "john"
    const d = name.charAt(0).toUpperCase() + name.slice(1)
    console.log("The name is",`${d}`);
    }
    fn()