module.exports = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <header>
            <h1>Welcome home</h1>
            <a href="/api/about">About</a>
            <a href="/api/contact">Contact</a>
            <a href="/api/proyect">Proyect</a>
        </header>
    `)
}
