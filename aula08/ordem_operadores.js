/*

Ordem das operações
1º Aritméticos (têm ordem de precedência):
()                    ==> parênteses  
**                    ==> potência
/ * %                 ==> divisão, multiplicação, resto da divisão
+ -                   ==> soma, subtração 

--------------------------------------------

2º Relacionais (NÃO têm ordem de precedência)
<                     ==> menor  
>                     ==> maior
<=                    ==> menor ou igual 
>=                    ==> maior ou igual 
!=                    ==> diferente  
==                    ==> igual  
===                   ==> igualdade restritiva   (analisa valor de grandeza e o tipo. Ex: 5 === 5)
!===                  ==> desigualdade restritiva(analisa valor de grandeza e o tipo. Ex: 5 !== '5')

----------------------------------------------

3º Lógicos (têm ordem de precedência)
!                     ==> negação
&&                    ==> conjunção (E)
||                    ==> disjunção (OU)

----------------------------------------------

4º Ternário: teste?true:false
teste   ==> teste lógico que retorna V ou F
true    ==> o que vai acontecer se o TESTE for V
false   ==> o que vai acontecer se o TESTE for F
Ex: var rg = idade >=18?'Maior de idade':'Menor de idade'

*/