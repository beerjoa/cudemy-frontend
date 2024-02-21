import { DateTime } from 'luxon';

const COUNTRIES: any = {
  US: 'United States',
  CA: 'Canada',
  KR: 'South Korea',
};

const HOUR_EMOJIS: any = {
  0: '🕛',
  1: '🕐',
  2: '🕑',
  3: '🕒',
  4: '🕓',
  5: '🕔',
  6: '🕕',
  7: '🕖',
  8: '🕗',
  9: '🕘',
  10: '🕙',
  11: '🕚',
};
HOUR_EMOJIS;

const COUNTRIES_TIMEZONES: any = {
  US: [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
  ],
  CA: ['America/Toronto', 'America/Vancouver'],
  KR: ['Asia/Seoul'],
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

export const getCountryTimeZones = (countryCode: string) => {
  return COUNTRIES_TIMEZONES[countryCode];
};

export const formatDateTime = (
  date: string,
  format: Intl.DateTimeFormatOptions = DateTime.DATE_SHORT,
) => {
  if (date === '') {
    return '-';
  }

  const formattedDate = DateTime.fromISO(date).toLocaleString(format, {
    locale: 'en-US',
  });

  return formattedDate;
};

export const getAgoTime = (date: string) => {
  const endedAt = DateTime.fromISO(date, {
    locale: 'en-US',
  });

  return endedAt.toRelative();
};
