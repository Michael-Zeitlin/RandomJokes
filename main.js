var jokesArray = [
    "באיזה שפה מדבר דאורדורנט? בצ'כית (בית שחית)",
    "מי מדבר הכי הרבה בכנסת? שר המשפטים",
    "איש אחד לוקח את אישתו לנופש בטבע בבקתת עץ. האישה,שמתרוממת לשנייה מהמיטה, אומרת: יקירי,תראה בחלון, איילה... עונה הבעל: דבר ראשון... זו לא איילה, זו פרה ודבר שני... זה לא חלון, זו מראה",
    "?איש אחד נכנס למסעדה ומבקש מהמלצר את העוף הכי צעיר.עונה לו המלצר: ביצה קשה",
    "ארבעה שוטרים מפגרים נהרגו בתאונה. שניים בתאונה עצמה, ושניים בשחזור",
    "...מה לא מנומס לשאול בחנות עתיקות? מה חדש",
    "איש אחד נפל לבור עמוק. ישב יום שלם בבור והתפלל לאלוהים , אלוהים רחמן ורחום בבקשה תעשה לי נס , אנא בבקשה אני רוצה נס פתאום נשמע קולו של אלוהים: ויאמר אלוהים אל האיש , כמה כפיות סוכר?",
    "למה חתולים לא נכנסים למקרר? כי יש שם קור כלבים",
    "איש אחד עולה על בניין, מגיע לקומה האחרונה ורואה ילד קטן קטן דרך החלון. הוא יורד קצת מדרגות ורואה שהילד גדל. הוא יורד עוד ורואה שהילד גדל עוד קצת. כשהוא מגיע לאדמה רואה האיש שהילד כבר ממש גדול. האיש רץ לילד מחבק ומנשק אותו. הילד שואל את האיש מי הוא. עונה האיש: אני מכיר אותך מאז שהיית קטן",
];

const random = Math.floor(Math.random() * jokesArray.length);

var arrNew = document.createElement("P");
arrNew.innerHTML = jokesArray[random];
document.body.appendChild(arrNew);

