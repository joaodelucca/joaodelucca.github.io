<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desweb1</title>
</head>
<body>
    

<?php
   #definir uma constante
   define("texto", 'ola vitor<br>');
   echo texto;
   #operadores
   $num = 0; #igual
   $num += 5; #soma do num
   $num -= 5; #subtração do num
   $num *= 5; #multiplicação do num
   $num /= 5; #divisão do num
   
   #pós fixo
   $a = 5;
   $b = $a ++; # b recebe a (5) e só depois a passa a valer 6

   $a = 5;
   $b = ++ $a; # a é incrementado antes de ser atribuido a b. ambos valem 6

   # uso do if
   $a = 1;
   $b = 2;
   if($a == $b) echo '<br>a e b são iguais';
   if($a != $b) echo '<br>a e b são diferentes';
   if($a > $b) echo '<br>a é maior que b';
   if($a < $b) echo '<br>a é menor que b';
   if($a >= $b) echo '<br>a é maior ou igual a b';
   if($a <= $b) echo '<br>a é menor ou igual a b';
   if($a === $b) echo '<br>a e b possuem valor e tipos igual';
   if($a !== $b) echo '<br>a e b possuem valor e tipos diferentes';

   echo "<br><br><br>";

   
   # || ou or, && e and
   $a = (false || true);
   $b = (false or true);
   var_dump($a, $b);

   $c = ($a && $b);
   $d = ($a and $b);
   var_dump($a, $b);


   echo "<br><br><br>";

   #operador ternário
   
   $a = ($a > $b) ? 'maior' : 'menor ou igual';
   var_dump($a);

   echo "<br><br><br>";

   #chamar função

   function testeglobal() {
       global $valor, $resultado;
       $valor += 1;
       $resultado += 1;
       echo "valor dentro da função: ".$valor."Resultado dentro da função: ".$resultado."<br>";  
   }
   $valor = 100;
   $resultado = 10 * $valor;
   echo "valor antes da função: ".$valor."resultado antes da função: ".$resultado."<br>";
   testeglobal();
   echo "valor depois da função: ".$valor."Resultado depois da função: ".$resultado."<br>";  

   echo "<br><br>";
   #if e else
   $z = 2;
   $x = 4;
   if($z > $x){
        echo 'z é maior que x';
   } elseif($z < $x) {
        echo 'x é maior que z';
   }


   /* + adição
      - subtração
      * multiplicação
      / divisão
      % resto da divisão */

?>
    

</body>
</html>