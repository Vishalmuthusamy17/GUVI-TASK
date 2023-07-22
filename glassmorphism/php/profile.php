<?php
// This code should be included in a separate PHP file that connects to the database
// and contains the necessary functions to update the user profile data.

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Get the form data
	$age = $_POST["age"];
	$dob = $_POST["dob"];
	$mobile = $_POST["mobile"];
	$address = $_POST["address"];
	$permanent_address = $_POST["permanent-address"];

	// Update the user profile data in the database using prepared statements
	$stmt = $conn->prepare("UPDATE user_profiles SET age=?, dob=?, mobile=?, address=?, permanent_address=? WHERE user_id=?");
	$stmt->bind_param("sssssi", $age, $dob, $mobile, $address, $permanent_address, $user_id);
	$stmt->execute();
	
	// Return success message
	echo "Profile updated successfully";
}
?>



