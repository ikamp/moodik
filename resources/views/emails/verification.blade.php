<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <h1>Verification Mail to {{ $employee->name }}</h1>
    <p>To Verify your account please click this link: <a href="http://localhost/verify/{{ $token }}"> Activation Link</a></strong></p>
</body>
</html>