export function commonTab (key,data) {
    for (var i = 0; i < data.length; i++) {
        if (key === i) {
            data[i].flag = true;
        } else {
            data[i].flag = false;
        }
    }
}