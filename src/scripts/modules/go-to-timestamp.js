(() => {
    /**
     * Convert timestamps from the form days:hours:minuts:seconds to seconds.
     * @param {String} timestamp
     * @returns {Number}
     */
    function timestampToSeconds(timestamp) {
        const secondsMap = [1, 60, 3600, 86400];
        return timestamp.split(':').reverse().reduce((total, current, unit) => {
            return total + Number.parseInt(current) * secondsMap[unit];
        }, 0);
    }

    [...document.querySelectorAll('.episode')].forEach(episode => {
        const player = episode.querySelector('.episode__audio');
        episode.addEventListener('click', click => {
            if (null !== click.target.closest('.episode__chapter')) {
                const timestamp = click.target.classList.contains('episode__time') ? click.target :
                    click.target.querySelector('.episode__time');
                player.currentTime = timestampToSeconds(timestamp.innerText);
            }
        });
    });
})();
