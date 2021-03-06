new Vue ({
    // I want to target the div with an id of 'tasks'
    el: '#tasks',
    // Here I can register any values or collections that hold data
    data: {
        task: {
            id: '',
            name: '',
            description: '',
            date: ''
        },
        tasks: []
    },

    // Anything within the ready function will run when the application loads
    ready: function() {
        //When the application loads, I want to call the method that initializes
        //Some data
        this.fetchTasks();
    },

    // Methods I want to use in the application are registered here
    methods: {
        //Method to retrieve and set some data
        fetchTasks: function() {
            var tasks = [
                {
                    id: 1,
                    name: 'User Authentication',
                    description: 'Used Angular Auth0 to add secure JWT authentication',
                    date: '02-30-2016'

                },
                {
                    id: 2,
                    name: 'PPMDOCK Frondend',
                    description: 'Used Angular Material for FrontEnd Part of the Application',
                    date: '03-02-2016'
                },
                {
                    id: 3,
                    name: 'PPMDOCK Backend',
                    description: 'Used Google Firebase database and AngularFire for Backend Part of the Application',
                    date: '04-01-2016'
                }
            ];

            // $set is a convenience method provided by Vue that is similar to pushing data onto an array
            this.$set('tasks', tasks);
        },

        // Add a task to the existing tasks array
        addTask: function () {
            if(this.task.name) { // to make sure at least I have a value present
                this.tasks.push(this.task);
                // then the form fields are cleared by setting the task object keys back to empty strings.
                this.task = { name: '', description: '', date: '' };
            }
        },
        deleteTask: function (task) {
            if(confirm('Are you sure you want to delete this Task?')) {
                this.tasks.$remove(task);
            }
        }
    }
});
