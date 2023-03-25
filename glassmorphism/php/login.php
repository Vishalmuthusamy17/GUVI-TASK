<?php 
    $username = $_REQUEST['username'];
    $password = $_REQUEST["password"];
    
    
    if(file_exists("database/".$username.".txt")){
        
        $file = fopen("database/".$username.".txt","r");
        $username = fgets($file);
        $email = fgets($file);
        $password2 = trim(fgets($file));
        fclose($file);
        
        if($password == $password2){
            echo "Login Successful";
        }else{
            echo "Password or Username is incorrect";
        }
        
    }
    else{
        
        echo "Password or Username is incorrect";
    }
    
    

?>



<?php
session_start();
include('db_connection.php');

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn,$_POST['username']);
    $password = mysqli_real_escape_string($conn,$_POST['password']); 

    $sql = "SELECT * FROM users WHERE username = '$username' and password = '$password'";
    $result = mysqli_query($conn,$sql);
    $count = mysqli_num_rows($result);

    if($count == 1) {
        $_SESSION['login_user'] = $username;
        header("location: dashboard.php");
    }else {
        $error = "Your Login Name or Password is invalid";
    }
}
?>

<form action="" method="post">
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="submit" value="Login">
</form>