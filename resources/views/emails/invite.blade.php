<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<h1>Dear {{ $employee->name }}</h1>
<p>Your manager <strong> {{ $manager->name }} </strong> is invited you to MoodIk system.</p>
<p>To accept this invitation please click the link: <a href="http://localhost/#/password/new/{{ $token }}"> Invitation Link</a></p>
</body>
</html>