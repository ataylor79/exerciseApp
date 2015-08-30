define({ "api": [
  {
    "type": "post",
    "url": "/api/exercise",
    "title": "Upload a new exercise",
    "name": "Add_an_exercise",
    "group": "Exercises",
    "description": "<p>Add an exercise to the library</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>201</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/exerciseController.js",
    "groupTitle": "Exercises"
  },
  {
    "type": "get",
    "url": "/api/exercise",
    "title": "Get list of exercises",
    "name": "Get_a_list_of_exercises",
    "group": "Exercises",
    "description": "<p>Get list of stored exercises</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "list",
            "description": "<p>of exercise</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/exerciseController.js",
    "groupTitle": "Exercises"
  },
  {
    "type": "put",
    "url": "/api/exercise/{exerciseId}",
    "title": "Overwrite complete existing exercise",
    "name": "Overwrite_an_exercise",
    "group": "Exercises",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>exercise unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>201</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/exerciseController.js",
    "groupTitle": "Exercises"
  },
  {
    "type": "put",
    "url": "/api/exercise/{exerciseId}",
    "title": "Overwrite complete existing exercise",
    "name": "Overwrite_an_exercise",
    "group": "Exercises",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>exercise unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>201</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/userController.js",
    "groupTitle": "Exercises"
  },
  {
    "type": "delete",
    "url": "/api/exercise/{exerciseId}",
    "title": "remove record",
    "name": "delete_an_exercise",
    "group": "Exercises",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>exercise unique ID.</p> "
          }
        ]
      }
    },
    "description": "<p>delete existing record</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>204</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/exerciseController.js",
    "groupTitle": "Exercises"
  },
  {
    "type": "delete",
    "url": "/api/exercise/{exerciseId}",
    "title": "remove record",
    "name": "delete_an_exercise",
    "group": "Exercises",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>exercise unique ID.</p> "
          }
        ]
      }
    },
    "description": "<p>delete existing record</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>204</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/userController.js",
    "groupTitle": "Exercises"
  },
  {
    "type": "patch",
    "url": "/api/exercise",
    "title": "Overwrite fields in record",
    "name": "update_an_exercise",
    "group": "Exercises",
    "description": "<p>Overwrite fields in record</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>201</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/exerciseController.js",
    "groupTitle": "Exercises"
  },
  {
    "type": "patch",
    "url": "/api/exercise",
    "title": "Overwrite fields in record",
    "name": "update_an_exercise",
    "group": "Exercises",
    "description": "<p>Overwrite fields in record</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>201</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/userController.js",
    "groupTitle": "Exercises"
  },
  {
    "type": "post",
    "url": "/api/user",
    "title": "Save a new user",
    "name": "Add_an_user",
    "group": "Users",
    "description": "<p>Add a user to the records</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>201</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/userController.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "Get list of users",
    "name": "Get_a_list_of_users",
    "group": "Users",
    "description": "<p>Get list of stored users</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "list",
            "description": "<p>of users</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/userController.js",
    "groupTitle": "Users"
  }
] });