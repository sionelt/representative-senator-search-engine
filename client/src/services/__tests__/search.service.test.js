import mockAxios from 'axios'

import Search from '../search.service'

describe('fetch people', () => {
  const mockState = 'Utah'

  it('fetch representatives by state: getRepresentatives()', async () => {
    const mockGetResponse = {
      data: {
        results: [
          {
            district: '1',
            link: 'https://robbishop.house.gov',
            name: 'Rob Bishop',
            office: '123 Cannon House Office Building; Washington DC 20515-4401',
            party: 'Republican',
            phone: '202-225-0453',
            state: 'UT',
          },
        ],
        success: true,
      },
    }

    mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockGetResponse))

    const data = await Search.getRepresentatives(mockState)

    expect(data).toEqual(mockGetResponse.data.results)
  })

  it('fetch senators by state: getSenators()', async () => {
    const mockGetResponse = {
      data: {
        results: [{ name: 'Mike Lee', party: 'Republican', state: 'UT', district: '', phone: '202-224-5444' }],
        success: true,
      },
    }

    mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockGetResponse))

    const data = await Search.getSenators(mockState)

    expect(data).toEqual(mockGetResponse.data.results)
  })
})
