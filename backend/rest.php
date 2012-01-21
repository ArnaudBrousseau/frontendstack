<?php

// Use your favorite REST & JSON library

$json = '[{"name":"Sheldon","from":"REST + JavaScript"},{"name":"Homer","from":"REST + JavaScript"}]';

// JSONP Interface

if (isset($_GET['callback'])){
	echo $_GET['callback'] . '(' . $json . ')';
}
else
	echo $json;