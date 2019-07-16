import mockAxios from 'axios'

import helpers from '../index'

describe('search helpers', () => {

  it('filter congress list by search entry: searchList()', async () => {
    const mockEntry = 'rob'
    const mockFilter = [
          {
            district: '1',
            link: 'https://robbishop.house.gov',
            name: 'Rob Bishop',
            office: '123 Cannon House Office Building; Washington DC 20515-4401',
            party: 'Republican',
            phone: '202-225-0453',
            state: 'UT',
          },
        ]

    const data = await helpers.searchList(mockFilter, mockEntry)

    expect(data).toEqual(mockFilter)
  })
})
