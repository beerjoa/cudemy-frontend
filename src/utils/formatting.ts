const COUNTRIES: any = {
  US: 'United States',
  CA: 'Canada',
  KR: 'South Korea',
};

export const getFlagEmojiFromCountryCode = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export const getCountryCodeFromTitle = (title: string) => {
  const formattedCountryCode = title.split('-')[1].toUpperCase();
  return {
    countryCode: formattedCountryCode,
    countryName: COUNTRIES[formattedCountryCode],
    countryFlag: getFlagEmojiFromCountryCode(formattedCountryCode),
  };
};

export const formatDateTime = (date: string, timeZone = 'UTC') => {
  if (date === '') {
    return '-';
  }

  const options: Intl.DateTimeFormatOptions = {
    timeZone: timeZone,
    timeZoneName: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-US', options);
};
