function start() {
    try {
        console.log(`Empty onStart function. Please put stuff here like creating environment file, etc`)
        process.exit(0)
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

start();