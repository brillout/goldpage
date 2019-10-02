module.exports = get_timestamp;

function get_timestamp() {
    const now = new Date();

    const date = (
        [
            now.getFullYear(),
            now.getMonth()+1,
            now.getDate(),
        ]
        .map(pad)
        .join('-')
    );

    const time = (
        [
            now.getHours(),
            now.getMinutes(),
            now.getSeconds(),
        ]
        .map(pad)
        .join('-')
    );

    return date+'_'+time+'\n';

    function pad(n) {
        return (
            n>9 ? n : ('0'+n)
        );
    }
}
