class Status {
  constructor(status, warp, type)
  {
    this.status = status;
    this.warp = warp;
    this.type = type;
  }

  determineReport(status, warp)
  {
    if(status === 'active' && warp <= 4) {
         return 'the engines are active and we could be going faster.'
    } else if (status === 'active' && warp > 4) {
        return 'the engines are active and we are going ' + warp + '.'
    } else if (status === 'down') {
        status_report += 'the engines are down.'
    } else {
        return 'the comms are down and we can`t reach engineering.'
    }
  }

  greet()
  {
    console.log(`Captain, ${this.determineReport(this.status, this.warp)}`)
  }
}

var mystatus = new Status("active", 2, "Dilithium Crystal");

mystatus.greet();

