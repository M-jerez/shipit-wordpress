



declare module 'shipit-utils'{


    /**
     * Returns the Shipit object, regardless of your context (Grunt or Shipit).
     * @param gruntOrShipit
     */
    export function getShipit(gruntOrShipit:IGrunt|Shipit):Shipit


    /**
     * Register a task, regardless of your context (Grunt or Shipit).
     * The description arguement is optional, and will only try to pass along a task description if you are using Grunt (it will be ignored if you are using Shipit).
     * task Fn|Array<String>
     * Task function or array of task names to run in order. Note: If in a Grunt context and passing an array of task names, task will always be synchronous/blocking.
     * @param gruntOrShipit
     * @param name
     * @param tasks
     */
    export function registerTask(gruntOrShipit:IGrunt|Shipit,name:string,tasks:string|string[])

    /**
     * Same egister tasks but dss a description for the task.
     * @param gruntOrShipit
     * @param name
     * @param description
     * @param tasks
     */
    export function registerTask(gruntOrShipit:IGrunt|Shipit,name:string,description:string,tasks:string|string[])


    /**
     * Run a task or array of tasks, regardless of your context (Grunt or Shipit).
     * @param gruntOrShipit
     * @param task
     */
    export default function  runTask(gruntOrShipit:IGrunt|Shipit, task:string|string[])


    /**
     * Test to see if all the values in an array are equal. Useful for determining if multiple remote servers are out of sync.
     * @param values
     */
    export function equalValues(values:any[])

}

