
function ChangerOptions() {
    const options = [
        {
            value: 'currentlyReading',
            text: 'Currently Reading',
        },
        {
            value: 'wantToRead',
            text: 'Want to Read',
        },
        {
            value: 'read',
            text: 'Read',
        },
        {
            value: 'none',
            text: 'None',
        }
    ];
    return {
        all: options,
        valid: options.filter((option) => { return option.value !== 'none' })
    };
}

export default ChangerOptions