SELECT fi.ID, fn.FISH_NAME, fi.LENGTH
FROM FISH_INFO as fi
JOIN FISH_NAME_INFO as fn on fi.FISH_TYPE = fn.FISH_TYPE
WHERE fi.length = (
    SELECT MAX(LENGTH)
    FROM FISH_INFO
    WHERE FISH_TYPE = fi.FISH_TYPE
)