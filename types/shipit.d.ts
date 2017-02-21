interface shipitOptions {
    /**
     * Servers on which the project will be deployed. Pattern must be user@myserver.com if user is not specified (myserver.com) the default user will be "deploy".
     */
    servers: string | string[];
    /**
     * Path to SSH key
     */
    key?: string;
}

interface Shipit {

    /**
     * Initializes shipit configuration
     * @param options
     */
    initConfig(options: shipitOptions): void

    /**
     * Create a new Shipit task, if you are familiar with gulp, this is the same API. You can use a callback or a promise in your task.
     * @param name
     * @param cb
     */
    tasks(name: string, cb: () => void)

    /**
     * Create a new Shipit task, if you are familiar with gulp, this is the same API. You can use a callback or a promise in your task.
     * @param name
     * @param deps
     * @param cb
     */
    tasks(name: string, deps: any, cb: () => void)

    /**
     * Create a new Shipit task that will block other tasks during its execution (synchronous).
     * @param name
     * @param cb
     */
    blTask(name: string, cb: ()=>void)

    /**
     * Create a new Shipit task that will block other tasks during its execution (synchronous).
     * @param name
     * @param cb
     */
    blTask(name: string, deps: any, cb: ()=>void)


    /**
     * Run Shipit tasks.
     * @param tasks
     */
    start(tasks: string|string[])


    /**
     * Run a command locally and streams the result. This command take a callback or return a promise. It returns a result object containing stdout, stderr and the child process object.
     * @param command
     * @param options
     * @param callback
     */
    local(command: string, options?, callback?: ()=>void)


    /**
     * Run a command remotely and streams the result. This command take a callback or return a promise.
     * If you want to run a sudo command, the ssh connection will use the TTY mode automatically.
     * It returns an array of result objects containing stdout, stderr and the child process object. The list of results matchs the list of servers specified in configuration.
     * @param command
     * @param options
     * @param callback
     */
    remote(command: string, options?, callback?: ()=>void)



    /**
     * Make a remote copy from a local path to a dest path.
     * @param src
     * @param dest
     * @param options
     * @param callback
     */
    remoteCopy(src:string, dest:string, options?, callback?:()=>void)


    /**
     * Log using Shipit, same API as console.log
     * @param string
     */
    log(string)


}

declare module 'shipit' {
    const shipit:Shipit;
    export  = shipit;
}
