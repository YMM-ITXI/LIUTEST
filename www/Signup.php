$Email       = $_GET["Email"];
$Name = $_GET["Name"];
$Password = $_GET["Password"];

//Open Connection
$conn = mysqli_connect("localhost", "DBUser", "DBPassword","DBName") or die(mysql_error());
mysqli_set_charset($conn, "utf8");

$stmt = $conn->prepare("insert into tblUsers(Email,Name,Password) values(?,?,?)");
$stmt->bind_param("sss", $Email,$Name,$Password);
if($stmt->execute() === TRUE) echo 1;
$stmt->close();
$conn->close();
?>