 -- 1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select * from client where length(FirstName)<=6;

-- 2. +Вибрати львівські відділення банку.+
select * from department where DepartmentCity='Lviv';

-- 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select * from client where Education='high'  order by LastName ;

-- 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
SELECT* FROM application ORDER BY idApplication DESC LIMIT 5  ;



-- 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
SELECT * FROM client WHERE LastName LIKE '%ina' or LastName LIKE '%iva' ;

-- 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select * from client where Department_idDepartment='2';

-- 7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.
select FirstName , lastname, idClient from  client  order by FirstName ;

-- 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
select * from client
join application on idClient=Client_idClient where Sum >5000;

-- 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
SELECT count(city),city FROM client GROUP BY city;

SELECT count(city),city FROM client GROUP BY city='Lviv';

-- 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
select max(Sum),FirstName  from application
join client on idClient=Client_idClient GROUP BY Client_idClient;

-- 11. Визначити кількість заявок на крдеит для кожного клієнта.
select Client_idClient, count(idApplication) as con from application group by Client_idClient;

-- 12. Визначити найбільший та найменший кредити.
select max(sum),min(sum) from application;


-- 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select count(education),sum(sum)  from application
join client on idClient=Client_idClient where education='high';

-- 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
select FirstName, avg(Sum)  from client
join application on idClient=Client_idClient
group by idClient
order by avg(Sum)  desc limit 1;


-- 15. Вивести відділення, яке видало в кредити найбільше грошей
select DepartmentCity,idDepartment ,sum(sum)from department
join client on Department_idDepartment = idDepartment
join application on idClient=Client_idClient
group by idDepartment
order by max(sum) desc  limit 1;

-- 16. Вивести відділення, яке видало найбільший кредит.
select DepartmentCity,idDepartment,max(sum) from department
join client on Department_idDepartment = idDepartment
join application on idClient=Client_idClient
group by idDepartment
order by max(sum) desc  limit 1;

-- 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update application join client on application.Client_idClient  = client.idClient
set Sum='6000' where client.education='high';

-- 18. Усіх клієнтів київських відділень пересилити до Києва.
UPDATE client SET City = 'Kyiv'
		WHERE Department_idDepartment = 1 OR Department_idDepartment = 4;


-- 19. Видалити усі кредити, які є повернені.
DELETE FROM application WHERE CreditState = 'Returned';


--  20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete app from application app
join client ON app.Client_idClient = client.idClient
WHERE (LastName LIKE '_o%'
  OR LastName LIKE'_a%'
  OR LastName LIKE'_e%'
  OR LastName LIKE'_i%'
  OR LastName LIKE'_u%'
  OR LastName LIKE'_y%');


-- Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select DepartmentCity,idDepartment from department
JOIN client ON Department_idDepartment = idDepartment
JOIN application ON idClient=Client_idClient
GROUP BY idDepartment
HAVING (DepartmentCity = "Lviv" AND Sum(Sum) > 5000);



-- Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select * from client
join application on Client_idClient = idClient
where sum>5000 and CreditState = 'Returned';




/* Знайти максимальний неповернений кредит.*/
select max(Sum) from application where CreditState='Not returned';



/*Знайти клієнта, сума кредиту якого найменша*/
select * from client
join application on Client_idClient = idClient
 order by application.Sum asc LIMIT 1;



/*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/
select Sum, Client_idClient FROM application where Sum> (SELECT avg(Sum) FROM application);


/*Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/
SELECT idClient, FirstName FROM client
JOIN application ON idClient = Client_idClient
WHERE city = (SELECT city FROM client
JOIN application ON idClient = Client_idClient
ORDER BY SUM  LIMIT 1) GROUP BY idClient;


#місто чувака який набрав найбільше кредитів
SELECT city FROM client
WHERE idClient = (SELECT Client_idClient FROM application ORDER BY Sum DESC LIMIT 1);



set sql_safe_updates = 0;
set sql_safe_updates = 1;