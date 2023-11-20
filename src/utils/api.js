const availableTimesByDate = {
    '2023-08-29': ['10:00', '11:00', '12:00'],
    '2023-09-01': ['10:00', '11:00', '12:00'],
    '2023-09-02': ['14:00', '15:00', '16:00'],
    '2023-09-03': ['10:00', '11:00', '12:00'],
    '2023-09-04': ['14:00', '15:00', '16:00'],
    '2023-09-05': ['10:00', '11:00', '12:00'],
    '2023-09-06': ['14:00', '15:00', '16:00'],
    '2023-09-07': ['10:00', '11:00', '12:00'],
    '2023-09-08': ['14:00', '15:00', '16:00'],
    '2023-09-09': ['10:00', '11:00', '12:00'],
    '2023-09-10': ['14:00', '15:00', '16:00'],
    '2023-09-11': ['10:00', '11:00', '12:00'],
    '2023-09-12': ['14:00', '15:00', '16:00'],
    '2023-09-13': ['10:00', '11:00', '12:00'],
    '2023-09-14': ['14:00', '15:00', '16:00'],
    '2023-09-15': ['10:00', '11:00', '12:00'],
    '2023-09-16': ['14:00', '15:00', '16:00'],
    '2023-09-17': ['10:00', '11:00', '12:00'],
    '2023-09-18': ['14:00', '15:00', '16:00'],
    '2023-11-19': ['10:00', '11:00', '12:00'],
    '2023-11-20': ['14:00', '15:00', '16:00'],
    'a': ['16:00', '17:00', '18:00','19:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
// edit
            else if(availableTimesByDate['a']){
                resolve(availableTimesByDate['a'])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {

    // availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}