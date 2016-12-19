var options = {
  access_token: 'TgQKNotRLzxq_FiC7Rw_g7zdYGZIlFJg',
  tzid: 'Etc/UTC'
};

cronofy.listCalendars(options)
  .then(function (response) {
      var calendars = response.calendars;
  });
