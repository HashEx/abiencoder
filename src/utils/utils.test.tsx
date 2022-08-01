import { Parameters } from '../interfaces';

import { encode, encodeSignature, getPlaceholder, validateArray } from './index';

describe("utils/validateArray", () => {
    describe("validate string array ", () => {
        const notEmptyString = (val: string) => val === "" ? "Value is empty" : "";
        it("validation message should be empty with correct array", () => {
            expect(validateArray('["t","t2","t3"]', notEmptyString)).toEqual("");
        })
        
        it("validation message shouldn't be empty with wrong array", () => {
            expect(validateArray('["","t2","t3"]', notEmptyString)).toEqual("Value is empty");
        })
    });
});

describe("utils/encode", () => {
    test("encode function call with arrays", () => {
        const parameters: Parameters = {
            type: "",
            funcName: "vestTokens",
            inputs: [{
                name: "",
                type: "address",
                value: "0x6b7ccd19b78f57efaa89e6291b8834831c2f539f",
            }, {
                name: "",
                type: "uint256",
                value: "55248089600000000000000000"
            }, {
                name: "",
                type: "uint256[]",
                value: "[550, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 650]"
            }, {
                name: "",
                type: "uint256[]",
                value: "[1634405944, 1647452344, 1663349944, 1678914000, 1694811600, 1710536400, 1726434000, 1742072400, 1757970000, 1773608400]"
            }, {
                name: "",
                type: "address",
                value: "0x547429ded38650aaab97cfe999288ee04bd4e6aa"
            }, {
                name: "",
                type: "uint8",
                value: "4"
            }]
        }

        const res = encode(parameters);
        const errors = res.errors.filter(Boolean); 
        expect(errors.length).toEqual(0);
        expect(res.encoded).toEqual("3b1b95cb0000000000000000000000006b7ccd19b78f57efaa89e6291b8834831c2f539f0000000000000000000000000000000000000000002db33cf0418404a500000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000220000000000000000000000000547429ded38650aaab97cfe999288ee04bd4e6aa0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000226000000000000000000000000000000000000000000000000000000000000044c000000000000000000000000000000000000000000000000000000000000044c000000000000000000000000000000000000000000000000000000000000044c000000000000000000000000000000000000000000000000000000000000044c000000000000000000000000000000000000000000000000000000000000044c000000000000000000000000000000000000000000000000000000000000044c000000000000000000000000000000000000000000000000000000000000044c000000000000000000000000000000000000000000000000000000000000044c000000000000000000000000000000000000000000000000000000000000028a000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000616b0e3800000000000000000000000000000000000000000000000000000000623220b8000000000000000000000000000000000000000000000000000000006324b4b800000000000000000000000000000000000000000000000000000000641231d0000000000000000000000000000000000000000000000000000000006504c5d00000000000000000000000000000000000000000000000000000000065f4b6d00000000000000000000000000000000000000000000000000000000066e74ad00000000000000000000000000000000000000000000000000000000067d5ea500000000000000000000000000000000000000000000000000000000068c87e500000000000000000000000000000000000000000000000000000000069b71dd0")
    });

    test("constructor with array arguments", () => {
        const parameters: Parameters = {
            type: "constructor",
            funcName: "",
            inputs: [{
                name: "",
                type: "address[]",
                value: '["0x547429ded38650aaab97cfe999288ee04bd4e6aa","0x547429ded38650aaab97cfe999288ee04bd4e6aa","0x547429ded38650aaab97cfe999288ee04bd4e6aa"]'
            }, {
                name: "",
                type: "uint256[]",
                value: "[40,20,30]",
            }]
        }

        const res = encode(parameters);
        const errors = res.errors.filter(Boolean); 

        if(errors.length > 0) {
            console.log("errors", errors);
        }
        expect(errors.length).toEqual(0);
    });

    test("encode function call with struct", () => {
        const parameters: Parameters = {
            type: "",
            funcName: "setGreeting",
            inputs: [{
                name: "",
                type: "tuple(string,uint256)",
                value: JSON.stringify(["HIHI", 100]),
            }]
        }

        const res = encode(parameters);
        const errors = res.errors.filter(Boolean);
        expect(errors.length).toEqual(0);
        expect(res.encoded).toEqual("b845b06800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000000044849484900000000000000000000000000000000000000000000000000000000")
    });

    test("encode function call with struct in struct", () => {
        const parameters: Parameters = {
            type: "",
            funcName: "setGreeting",
            inputs: [{
                name: "",
                type: "tuple(tuple(string,uint256),address)",
                value: JSON.stringify([["HIHI", 100],"0xD34509d2DBcB887252cF370a9D03Eb1592D1ceBa"]),
            }]
        }

        const res = encode(parameters);
        const errors = res.errors.filter(Boolean);
        expect(errors.length).toEqual(0);
        expect(res.encoded).toEqual("e1165bf700000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000040000000000000000000000000d34509d2dbcb887252cf370a9d03eb1592d1ceba0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000000044849484900000000000000000000000000000000000000000000000000000000");
    });

    test("encode function signature", () => {
      const sig = 'verifyTx(((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),uint256[2])';

      expect(encodeSignature(sig)).toEqual("43cd76fc");
  })

    test("encode function with fixed-length array of elements,", () => {
        const parameters: Parameters = {
            type: "",
            funcName: "verifyTx",
            inputs: [{
                name: "",
                type: "tuple(tuple(uint256,uint256),tuple(uint256[2],uint256[2]),tuple(uint256,uint256))",
                value: JSON.stringify([["0x0e80ca8906f6387652a94c97d79c2446708417437743b76b47b567c3e0f6faee","0x06de9112ddbf310571c2544efea26794355c36c202f034f9a80f8a98ed783f16"],[["0x0949e29be2d68c7ad5e31db0e61c77e982a8b7a446eae46a6df13fffe16aebc2", "0x12aae077e227a3389ee03a120229c9f5bc6cfb58c81825295777b8782096f2ac"],["0x208b556687c1459974a72dca91a3142091e19007a065d7fb1088bb06b763db13","0x15ed708130cdf189b8f1a0d3ed489f7aee87a9ac27c15c269de5d1b25e9f1df6"]],["0x0fd7a5f6827058661ecb4470c5d53282d657db039f430b550da1627548b01ead","0x2f9c74bc52ea368da90ced109f1fbf3743cdbe7a9863e1b99dd2772687115ab8"]]),
            },
            {
                name: "",
                type: "uint256[2]",
                value: JSON.stringify(["0x0000000000000000000000009f9afb30acafd9fe7b4362a9e541f725a3d6532f","0x00000000000000000000000c781b9fcd7dbd07e1a143b545e9274ef0ccbe7fd0"]),
            }]
        }

        const res = encode(parameters);
        const errors = res.errors.filter(Boolean);
        expect(errors.length).toEqual(0);
        expect(res.encoded).toEqual("43cd76fc0e80ca8906f6387652a94c97d79c2446708417437743b76b47b567c3e0f6faee06de9112ddbf310571c2544efea26794355c36c202f034f9a80f8a98ed783f160949e29be2d68c7ad5e31db0e61c77e982a8b7a446eae46a6df13fffe16aebc212aae077e227a3389ee03a120229c9f5bc6cfb58c81825295777b8782096f2ac208b556687c1459974a72dca91a3142091e19007a065d7fb1088bb06b763db1315ed708130cdf189b8f1a0d3ed489f7aee87a9ac27c15c269de5d1b25e9f1df60fd7a5f6827058661ecb4470c5d53282d657db039f430b550da1627548b01ead2f9c74bc52ea368da90ced109f1fbf3743cdbe7a9863e1b99dd2772687115ab80000000000000000000000009f9afb30acafd9fe7b4362a9e541f725a3d6532f00000000000000000000000c781b9fcd7dbd07e1a143b545e9274ef0ccbe7fd0");
    })
});


describe("utils/getPlaceholder", () => {
    const placeholders: {[x: string]: string} = {
        "Address": "Example: 0x11...11",
        "Address[]": `Example: ["0x11...11", "0x21...21", "0x31...31"]`,
        "Uint": "Example: 111222333",
        "Uint[]": "Example: [0,1,2]",
        "Bool": "Example: false",
        "Bool[]": "Example: [true, false, false]",
        "Bytes": "Example: 111222333",
        "Bytes[]": "Example: [0,1,2]",
        "String": "Example: str0",
        "String[]": `Example: ["str0", "str1", "str2"]`
    }
    
    Object.keys(placeholders).forEach((type: string) => {
        test(type, () => {
            const placeholder = getPlaceholder(type);
            expect(placeholder).toEqual(placeholders[type])
        })
    })
})
