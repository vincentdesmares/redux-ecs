const rewire = require("rewire")
const reducer = rewire("./reducer")
const SystemReducer = reducer.__get__("SystemReducer")
// @ponicode
describe("SystemReducer", () => {
    test("0", () => {
        let callFunction = () => {
            SystemReducer({}, "REMOVE")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            SystemReducer("Alabama", { type: "ADD_TODO" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            SystemReducer({}, "install")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            SystemReducer({}, "discard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            SystemReducer({}, "SHUTDOWN")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            SystemReducer(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
