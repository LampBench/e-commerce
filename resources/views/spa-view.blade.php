<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{env('APP_NAME')}}</title>
</head>
<body style="margin: 0;">
    <div id="root"></div>
    <script src="{{ mix('/js/index.js')}} "></script>
</body>
</html>
