const { TVChannel, ChannelManager } = require('./tvchannels')
//==========================================================================================
// addChannel
//==========================================================================================
let manager = new ChannelManager()
test('Test addChannel Function, add unexist channel', () => {
    let check = true
    try {
        manager.addChannel(new TVChannel(1, 'M+', 1, 'Music'))
        manager.addChannel(new TVChannel(2, 'Zee Aflam', 7, 'Movies'))
        manager.addChannel(new TVChannel(3, 'Russia Today', 5, 'News'))
        manager.addChannel(new TVChannel(4, 'CBC', 3, 'News'))
        manager.addChannel(new TVChannel(5, 'Bein', 9, 'Sports'))
    } catch {
        check = false
    }
    expect(check)
        .toBe(true)
})
test('Test addChannel Function, add exist channel', () => {
    let check = true
    try {
        manager.addChannel(new TVChannel(1, 'M+', 1, 'Music'))
    } catch {
        check = false
    }
    expect(check)
        .toBe(false)

})

//==========================================================================================
// deleteChannel
//==========================================================================================

test('Test deleteChannel Function, delete unexist channel', () => {
    let check = true
    try {
        manager.deleteChannel(546221655)
    } catch {
        check = false
    }
    expect(check)
        .toBe(false)

})
test('Test deleteChannel Function, delete exist channel', () => {
    let check = true
    try {
        manager.deleteChannel(5)
    } catch {
        check = false
    }
    expect(check)
        .toBe(true)

})

//==========================================================================================
// countChannels
//==========================================================================================
test('Test countChannels Function', () => {
    let manager2 = new ChannelManager()
    manager2.addChannel(new TVChannel(1, 'M+', 1, 'Music'))
    manager2.addChannel(new TVChannel(2, 'Zee Aflam', 7, 'Movies'))
    manager2.addChannel(new TVChannel(3, 'Russia Today', 5, 'News'))
    manager2.addChannel(new TVChannel(4, 'CBC', 3, 'News'))
    manager2.addChannel(new TVChannel(5, 'Bein', 9, 'Sports'))
    let count = manager2.countChannels()
    expect(count)
        .toBe(5)
})

