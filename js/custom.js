'use strict';

var server;

server = "https://data-seed-prebsc-1-s1.binance.org:8545"; /* bsc testnet */
//server = "https://bsc-dataseed1.ninicoin.io"; /* bsc mainnet */

(() => {

let cfg = {
    data() {
        return {
            current_time: new Date().getTime(),
            web3: false,
            conn: false,
            contract: {
                abi: [{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getUserStakeInfo","outputs":[{"name":"amount","type":"uint256"},{"name":"start","type":"uint256"},{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalReferrals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"referrer","type":"address"}],"name":"stake","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"unstake","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"invalidateContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"name":"referrer","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"STAKE_RATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERCENT_DIVISOR","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAmountOfUnstaked","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"claim","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalUnstaked","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"STAKE_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAmountOfStaked","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"name":"_totalStaked","type":"uint256"},{"name":"_numberOfStakes","type":"uint256"},{"name":"_totalUnstaked","type":"uint256"},{"name":"_numberOfUnstaked","type":"uint256"},{"name":"_totalClaimed","type":"uint256"},{"name":"_checkpoint","type":"uint256"},{"name":"_claimable","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalStaked","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractInfo","outputs":[{"name":"_totalStaked","type":"uint256"},{"name":"_totalUnstaked","type":"uint256"},{"name":"_totalClaimed","type":"uint256"},{"name":"_totalReferrals","type":"uint256"},{"name":"_totalUsers","type":"uint256"},{"name":"_contractBalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalStaked","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserClaimable","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"STAKE_MIN","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"commissionWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MARKETING_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalUnstaked","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"STAKE_PENALTY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralInfo","outputs":[{"name":"bonus","type":"uint256"},{"name":"totalBonus","type":"uint256"},{"name":"referrals","type":"uint256[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalClaimed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"STAKE_SAFEHOLD","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"claimReferral","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"launchDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"wallet","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"NewStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Unstake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RefClaim","type":"event"}],
                address: "0xb6225a4c1f4772EE423638184F2aF4898E806130"
            },
            launch_date: 1633597200000,
            public: 1
        };
    },
    created() {
        console.log("App initialising..");
        let self = this;
        
        const isMetaMaskInstalled = () => {
            const { ethereum } = window;
            return Boolean(ethereum && ethereum.isMetaMask);
        };
        (async () => {
            try {
                if(window.ethereum) {
                    self.web3 = new Web3(ethereum);
                    try {
                        /* request account access */
                        await ethereum.enable();
                        await ethereum.request({ method: 'eth_accounts' });
                        if(isMetaMaskInstalled()) {
                            window.ethereum.on('accountsChanged', accounts => {
                                window.location.reload();
                            });
                        }
                        self.conn = new Web3(server);
                    } catch(e) {
                        /* user denied account access */
                        console.log("App denied access");
                    }
                } else if(window.web3) {
                    self.conn = new Web3(server);
                    self.web3 = new Web3(server);
                } else {
                    self.conn = new Web3(server);
                    self.web3 = new Web3(self.conn);
                }
            } catch(e) {
                console.log(e);
            }
        })();
        setInterval(() => {
            self.current_time = new Date().getTime();
        }, 500);
    },
    methods: {
    }
};

window.App = new Vue({
    mixins: [cfg],
    el: '#bnbstation',
    data: {
        gasPrice: 1e10,
        bnbstation: {
            balance: 0,
            claimed: 0,
            referrals: 0,
            staked: 0,
            unstaked: 0,
            users: 0,
            volume: 0
        },
        user: {
            ref: "0x0f12E95E826118094aE7d6BdC5B941ec558Fac45",
            address: "",
            balance: 0,
            checkpoint: 0,
            claimable: 0,
            numberOfStakes: 0,
            numberOfUnstaked: 0,
            claimed: 0,
            staked: 0,
            unstaked: 0,
            referrals: {
                levels: [0, 0, 0],
                bonus: 0,
                totalBonus: 0
            },
            stakes: []
        },
        pages: {
            stake: 0,
            unstake: 0
        },
        val: {
            stake: 0
            
        },
        notifications: []
    },
    mounted() {
        let self = this;
        let isAddress = function (address) {
			return (/^(0x){1}[0-9a-fA-F]{40}$/i.test(address));
		};
		function getUrlParameter(sParam) {
			var sPageURL = decodeURIComponent(window.location.search.substring(1)),
				sURLVariables = sPageURL.split('&'),
				sParameterName,
				i;
			for (i = 0; i < sURLVariables.length; i++) {
				sParameterName = sURLVariables[i].split('=');

				if (sParameterName[0] === sParam) {
					return sParameterName[1] === undefined ? true : sParameterName[1];
				}
			}
		};
        /* set refs */
        let m = location.search.match(/ref=(0x[a-fA-F0-9]{40})/i);
        if(m) {
            self.user.ref = m[1];
            document.cookie = "ref=" + self.user.ref + "; path=/; expires=" + (new Date(new Date().getTime() + 86400 * 365 * 1000)).toUTCString();
        }
        m = document.cookie.match(/ref=(0x[a-fA-F0-9]{40})/i);
        if(m) self.user.ref = m[1];
        
        console.log("Wallet connected");
        /* check if on bsc */
        (async function() {
            if(await self.web3.eth.getChainId() != await self.conn.eth.getChainId()) {
                self.notify("Please switch to the BSC Network", "The current wallet is not connected to the Binance Smart Chain Mainnet", 24e18);
                self.fetchInfo();
            } else {
                self.fetchInfo();
            }
        })();
        
        /* Check for dark mode preference at the OS level */
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        
        /* Get the user's theme preference from local storage, if it's available */
        const currentTheme = localStorage.getItem("theme");
        
        if(currentTheme == null) {
            if(prefersDarkScheme.matches) {
                document.body.classList.toggle("dark-mode");
            }
        } else if (currentTheme == "dark") {
            document.body.classList.toggle("dark-mode");
        }
        
        
    },
    watch: {
    },
    methods: {
        notify(title, content='', timeout=8e3) {
            let self = this;
            if(content == '') {
                content = title;
                title = '';
            }
            self.notifications.push({
                expiresOn: self.current_time + timeout,
                title: title,
                content: content
            });
            /* clean notifications */
            for(let i=0; i<self.notifications.length; i++) {
                if(self.notifications[i].expiresOn <= self.current_time) {
                    /* remove */
                    self.notifications.splice(i, 1);
                    i--;
                }
            }
        },
        connectWallet() {
            let self = this;
            
            const isMetaMaskInstalled = () => {
                const { ethereum } = window;
                return Boolean(ethereum && ethereum.isMetaMask);
            };
            (async () => {
                try {
                    if(window.ethereum) {
                        self.web3 = new Web3(ethereum);
                        try {
                            /* request account access */
                            await ethereum.enable();
                            await ethereum.request({ method: 'eth_accounts' });
                            if(isMetaMaskInstalled()) {
                                window.ethereum.on('accountsChanged', accounts => {
                                    window.location.reload();
                                });
                            }
                            self.conn = new Web3(server);
                        } catch(e) {
                            /* user denied account access */
                            self.notify("Access has been denied by user.");
                            console.log("App denied access");
                        }
                        self.public = 0;
                    } else if(window.web3) {
                        self.conn = new Web3(server);
                        self.web3 = new Web3(server);
                        self.public = 0;
                    } else {
                        self.conn = new Web3(server);
                        self.web3 = new Web3(conn);
                    }
                } catch(e) {
                    console.log(e);
                }
            })();
        },
        closeNotif(index) {
            let self = this;
            self.notifications.splice(index, 1);
        },
        toggleStake() {
            this.pages.stake = !this.pages.stake;
        },
        toggleUnstake() {
            this.pages.unstake = !this.pages.unstake;
        },
        toggleTheme() {
            document.body.classList.toggle("dark-mode");
            var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
            localStorage.setItem("theme", theme);
        },
        copyRef() {
            let self = this;
            let s = document.createElement('input');
            s.value = "https:\/\/bnbstation.space/?ref=" + self.user.address;
            document.body.appendChild(s);
            if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                s.contentEditable = true;
                s.readOnly = false;
                let range = document.createRange();
                range.selectNodeContents(s);
                let sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                s.setSelectionRange(0, 999999);
            } else {
                s.select();
            }
            try {
                document.execCommand('copy');
                this.notify("Copied to clipboard", s.value);
            } catch(e) {}
            s.remove();
        },
        maxStake() {
            this.val.stake = this.user.balance;
        },
        parseBNB(wei) {
            return (wei/1e18);
            /*return parseFloat(Web3.utils.fromWei(wei, "ether"));*/
        },
		toWei(a) {
			return a * 1e18;
            /*return this.web3.utils.toWei(a + "");*/
		},
		gweiToWei(a) {
			return a * 1e9;
		},
        format(val, dec=0) {
            if(isNaN(val)) return "...";
            if(dec == 0) dec = (val >= 0.0001) ? (val >= 0.01) ? 2 : 4 : (val <= 0) ? 2 : 8;
            return (Math.round(val * 10**dec)/10**dec).toFixed(dec);
        },
        prettifyAmount(n) {
            var ranges = [
                { divider: 1e18 , suffix: 'E' },
                { divider: 1e15 , suffix: 'P' },
                { divider: 1e12 , suffix: 'T' },
                { divider: 1e9 , suffix: 'B' },
                { divider: 1e6 , suffix: 'M' },
                { divider: 1e3 , suffix: 'K' }
            ];
            for (var i = 0; i < ranges.length; i++) {
                if (n >= ranges[i].divider) {
                    n = Math.floor(n / (ranges[i].divider/100))/100;
                    return n.toString() + ranges[i].suffix;
                }
            }
            return n.toString();
        },
        countdown(end) {
            var now = new Date().getTime();
            var timeleft = end - now;
            var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            hours = (days * 24) + hours;
            if(hours < 10) hours = "0" + hours;
            if(minutes < 10) minutes = "0" + minutes;
            if(seconds < 10) seconds = "0" + seconds;
            return {
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        },
        prettyDate(e) {
            if(e < 100) return "No record";
            if(e < 16e10) e*=1e3;
            return window.countdown(e);
        },
        fetchInfo() {
            let self = this;
            console.log("Checking User..");
            try {
                self.web3.eth.getAccounts((e, accounts) => {
                    let address = accounts[0];
                    if(address != "" && address != undefined) {
                        self.public = 0;
                        self.user.address = address;
                        self.web3.eth.getBalance(address, (e, res) => {
                            if(e) console.log(e);
                            else {
                                self.user.balance = self.parseBNB(res);
                            }
                        });
                        self.getContractInfo();
                    } else {
                        /* no wallet */
                        console.log("No Wallet");
                        self.notify("No wallet detected!", '', 30e3);
                        self.public = 1;
                        self.getContractInfo();
                    }
                });
            } catch(e) {
                console.log(e);
                self.public = 1;
                self.getContractInfo();
            }
        },
        getContractInfo() {
            let self = this;
            let contract = new self.web3.eth.Contract(self.contract.abi, self.contract.address);;
            if(self.public == 1) {
                /* read only mode */
                console.log("[Read Only Mode]");
                contract.methods.getContractInfo().call((e, res) => {
                   if(!e) self.updateContractDetails(res);
                   setTimeout(self.getContractInfo, 3000);
                });
            } else {
                console.log("[Authorized Mode]");
                try {
                    contract.methods.getContractInfo().call((e, res) => {
                       if(!e) self.updateContractDetails(res);
                       setTimeout(self.getContractInfo, 3000);
                    });
                    contract.methods.getUserInfo(self.user.address).call((e, res) => {
                        if(!e) {
                            self.updateUserDetails(res);
                            if(self.pages.unstake==0) return;
                            /* get referral infos */
                            let stakeCount = self.user.numberOfStakes + self.user.numberOfUnstaked;
                            for(let i=0; i<stakeCount; i++) {
                                contract.methods.getUserStakeInfo(self.user.address, i).call((e, res) => {
                                    self.updateStakeInfo(res, i);
                                });
                            }
                        }
                    });
                    contract.methods.getUserReferralInfo(self.user.address).call((e, res) => {
                        if(!e) self.updateRefInfo(res);
                    });
                } catch(e) {
                    self.public = 1;
                    self.notify("No wallet detected!");
                }
            }
        },
        updateContractDetails(res) {
            let self = this;
            self.bnbstation = {
                balance: self.parseBNB(res._contractBalance),
                claimed: self.parseBNB(res._totalClaimed),
                referrals: self.parseBNB(res._totalReferrals),
                staked: self.parseBNB(res._totalStaked),
                unstaked: self.parseBNB(res._totalUnstaked),
                users: parseInt(res._totalUsers),
                volume: self.parseBNB(res._totalClaimed) + self.parseBNB(res._totalStaked) + self.parseBNB(res._totalUnstaked) + self.parseBNB(res._totalReferrals)
            };
        },
        updateUserDetails(res) {
            let self = this;
            self.user.checkpoint = parseInt(res._checkpoint);
            self.user.claimable = self.parseBNB(res._claimable);
            self.user.numberOfStakes = parseInt(res._numberOfStakes);
            self.user.numberOfUnstaked = parseInt(res._numberOfUnstaked);
            self.user.claimed = self.parseBNB(res._totalClaimed);
            self.user.staked = self.parseBNB(res._totalStaked);
            self.user.unstaked = self.parseBNB(res._totalUnstaked);
        },
        updateStakeInfo(res, i) {
            let self = this;
            let cooldown = 15 * 24 * 60 * 60 * 1000, penalty = 0;
            let end = (parseInt(res.start) * 1000) + cooldown;
            if(self.current_time < end) {
                /* still under cooling period of 15 days */
                penalty = 1;
            }
            self.user.stakes[i] = {
                amount: self.parseBNB(res.amount),
                start: new Date(parseInt(res.start) * 1000).toLocaleDateString(),
                end: end,
                active: res.active,
                penalty: penalty
            };
        },
        updateRefInfo(res) {
            let self = this;
            self.user.referrals.bonus = self.parseBNB(res.bonus);
            self.user.referrals.totalBonus = self.parseBNB(res.totalBonus);
            self.user.referrals.levels[0] = res.referrals[0];
            self.user.referrals.levels[1] = res.referrals[1];
            self.user.referrals.levels[2] = res.referrals[2];
        },
        _stake() {
            let self = this;
            let amount = self.val.stake;
            if(amount < 0.05 || amount > self.user.balance) return;
            let contract = new self.web3.eth.Contract(self.contract.abi, self.contract.address);
            /*contract.methods.stake(self.user.ref).estimateGas({
                from: self.user.address,
                value: self.toWei(amount)
            }, (e, gas) => {
                let gasFee = gas * self.gasPrice;
                if(self.toWei(amount) + gasFee > self.toWei(self.user.balance)) {
                    amount = self.parseBNB(self.toWei(amount) - gasFee);
                }*/
            contract.methods.stake(self.user.ref).send({
                from: self.user.address,
                value: self.toWei(amount),
                /*gasPrice: self.gasPrice,
                gas: gas*/
            }, (e, res) => {
                if(!e) {
                    self.toggleStake();
                } else {
                    if(e.code == 4001) {
                        self.notify("Transaction Rejected!");
                    }
                }
            }).then((receipt) => {
                self.notify("Stake successful!");
            });
            /*});*/
        },
        _unstake(i) {
            let self = this;
            if(self.user.stakes[i].active == false) return;
            let contract = new self.web3.eth.Contract(self.contract.abi, self.contract.address);
            contract.methods.unstake(i).send({
                from: self.user.address
            }, (e, res) => {
                if(!e) {
                    self.notify("Unstaking #" + (i+1) + " ...");
                } else {
                    if(e.code == 4001) {
                        self.notify("Transaction Rejected!");
                    }
                }
            }).then((res) => {
                self.notify("Unstaked #" + (i+1) + " successfully!");
            });
        },
        _claim() {
            let self = this;
            if(self.user.claimable <= 0) return;
            let contract = new self.web3.eth.Contract(self.contract.abi, self.contract.address);
            contract.methods.claim().send({
                from: self.user.address
            }, (e, res) => {
                if(!e) {
                    self.notify("Claiming stake rewards...");
                } else {
                    if(e.code == 4001) {
                        self.notify("Transaction Rejected!");
                    }
                }
            }).then((res) => {
                let claimed = (res.events.Claim.returnValues.amount/1e18);
                claimed = (claimed < 0.0001) ? claimed.toFixed(8) : claimed.toFixed(4);
                self.notify("Claimed " + claimed + " BNB successfully!", '', 1e18);
            });
        },
        _claimRef() {
            let self = this;
            if(self.user.referrals.bonus <= 0) return;
            let contract = new self.web3.eth.Contract(self.contract.abi, self.contract.address);
            contract.methods.claimReferral().send({
                from: self.user.address
            }, (e, res) => {
                if(!e) {
                    self.notify("Claiming referral rewards...");
                } else {
                    if(e.code == 4001) {
                        self.notify("Transaction Rejected!");
                    }
                }
            }).then((res) => {
                let claimed = (res.events.RefClaim.returnValues.amount/1e18);
                claimed = (claimed < 0.0001) ? claimed.toFixed(8) : claimed.toFixed(4);
                self.notify("Claimed " + claimed + " BNB successfully!", '', 1e18);
            });
        }
    }
});

})();