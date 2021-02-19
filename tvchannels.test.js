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

//==========================================================================================
// getChannel
//==========================================================================================
test('Test getChannel Function, get exist channel', () => {
    let c = [manager.getChannel(1)]
    expect(c.length)
        .toBe(1)

})
test('Test getChannel Function, get unexist channel', () => {
    expect(manager.getChannel(1546))
        .toBe(undefined)
})

//==========================================================================================
// subscribeChannel
//==========================================================================================
test('Test subscribeChannel Function, subscribe unsubscribed channel', () => {
    expect(manager.subscribeChannel(1))
        .toBe(true)
})
test('Test subscribeChannel Function, subscribe subscribed channel', () => {
    expect(manager.subscribeChannel(1))
        .toBe(false)
})

//==========================================================================================
// unsubscribeChannel
//==========================================================================================
test('Test unsubscribeChannel Function', () => {
    let c = true
    let manager2 = new ChannelManager()
    manager2.addChannel(new TVChannel(1, 'M+', 1, 'Music'))
    manager2.addChannel(new TVChannel(2, 'Zee Aflam', 7, 'Movies'))
    manager2.addChannel(new TVChannel(3, 'Russia Today', 5, 'News'))
    manager2.addChannel(new TVChannel(4, 'CBC', 3, 'News'))
    manager2.addChannel(new TVChannel(5, 'Bein', 9, 'Sports'))
    manager2.subscribeChannel(1)
    manager2.subscribeChannel(2)
    manager2.subscribeChannel(3)
    try {
        manager2.unsubscribeChannel(5)
        manager2.unsubscribeChannel(2)
        manager2.unsubscribeChannel(102)
    }
    catch {
        c = false
    }
    expect(c)
    .toBe(true)
})
