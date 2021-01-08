
with CTE_1(EmployeeId, EmployeeName)
as
(
select EmployeeId, EmployeeName from Employee 
)
--select * from CTE_1
select * from CTE_1 as  c left join Employee as e  on c.EmployeeId = e.EmployeeId 