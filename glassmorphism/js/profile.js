        // Initialize user data from backend
        var userData = [];

        // Function to display user data on page
        function displayUserData() {
            var userDataDiv = document.getElementById("user-data");
            userDataDiv.innerHTML = "";
            var keySelect = document.getElementById("key-select");
            keySelect.innerHTML = "";
            var keyDelete = document.getElementById("key-delete");
            keyDelete.innerHTML = "";

            for (var i = 0; i < userData.length; i++) {
                var key = userData[i].key;
                var value = userData[i].value;

                var userDataItem = document.createElement("div");
                userDataItem.innerHTML = "<strong>" + key + ":</strong> " + value;

                userDataDiv.appendChild(userDataItem);

                // Update key select dropdown
                var keyOption = document.createElement("option");
                keyOption.text = key;
                keySelect.add(keyOption);
                keyDelete.add(keyOption.cloneNode(true));
            }
        }

        // Function to create new user data
        function createUserData() {
            var key = document.getElementById("key-input").value;
            var value = document.getElementById("value-input").value;
            let duplicate = false;
            userData.forEach(function(item) {
                if(key === item.key){
                    duplicate = true;
                }
            });
            if(!duplicate){
                userData.push({ key: key, value: value });
                // AJAX call to create in backend
            }

            displayUserData();
        }

        // Function to update existing user data
        function updateUserData() {
            var key = document.getElementById("key-select").value;
            var newValue = document.getElementById("new-value-input").value;

            for (var i = 0; i < userData.length; i++) {
                if (userData[i].key === key) {
                    userData[i].value = newValue;
                    // AJAX call to update in backend
                    break;
                }
            }

            displayUserData();
        }

        // Function to delete existing user data
        function deleteUserData() {
            var key = document.getElementById("key-select").value;

            for (var i = 0; i < userData.length; i++) {
                if (userData[i].key === key) {
                    userData.splice(i, 1);
                    // AJAX Call to delete in backend
                    break;
                }
            }

            displayUserData();
        }

        // Add event listeners to forms
        document.getElementById("create-form").addEventListener("submit", function (event) {
            event.preventDefault();
            createUserData();
        });

        document.getElementById("update-form").addEventListener("submit", function (event) {
            event.preventDefault();
            updateUserData();
        });

        document.getElementById("delete-form").addEventListener("submit", function (event) {
            event.preventDefault();
            deleteUserData();
        });