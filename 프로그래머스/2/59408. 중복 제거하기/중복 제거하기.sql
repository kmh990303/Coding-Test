-- 코드를 입력하세요
SELECT COUNT(DISTINCT NAME)
FROM ANIMAL_INS
WHERE NAME IN (
    SELECT NAME
    FROM ANIMAL_INS
    WHERE NAME IS NOT NULL
)