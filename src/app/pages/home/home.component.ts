import { FaceApiService } from './../../providers/face-api.service';
import { Component, OnInit } from '@angular/core';
import 'tracking/build/tracking';
import 'tracking/build/data/face';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tracker: any;
  task: any;
  isLock: boolean = false;
  personGroupId: any = "5b4ea676a581760014b38015";
  personIDs: any = [];

  constructor(private faceService: FaceApiService) { }

  ngOnInit() {
    this.initTracker();
  }

  initTracker(): void {
    try {
      const global = <any>window;
      this.tracker = new global.tracking.ObjectTracker('face');
      this.task = global.tracking.track('#video', this.tracker, { camera: true });

      this.tracker.on('track', (event) => {
        const { data } = event;
        //console.log(data);
        this.tryToDetectFace(data);
      });
      this.tracker.setInitialScale(4);
      this.tracker.setStepSize(2);
      this.tracker.setEdgesDensity(0.1);

    } catch (e) {
      console.log(e);
    }
  }

  tryToDetectFace(trackedData: any): void {
    if (trackedData.length > 0) {
      const video = this.getVideo();
      const canvas = this.getCanvas();
      const ctx = canvas.getContext('2d');


      if (video && canvas) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);
        trackedData.forEach((rect) => {
          var img = new Image();
          img.src = canvas.toDataURL("image/jpeg", 0.75);

          const gradient = ctx.createLinearGradient(0, 0, 170, 0);
          ctx.strokeStyle = '#a64ceb';
          ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
          ctx.font = '11px Helvetica';
          ctx.fillStyle = '#fff';
          // ctx.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
          // ctx.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);

          if (!this.isLock) {
            this.detect(img.src);
          }
        });
      }
    } else {
      if (this.personIDs.length > 0) {
        //this.personIDs = [];
      }
    }
  }

  detect(face: any) {
    try {
      this.faceService.Detect(face).then((faces: any) => {
        this.isLock = true;
        this.faceService.PushFaceIds(faces).then((faceIDs: any) => {
          if (faceIDs.length > 0) {
            let body: any = {
              faceIds: faceIDs,
              personGroupId: this.personGroupId,
              maxNumOfCandidatesReturned: 10,
              confidenceThreshold: 0.7
            };
            this.faceService.Identify(body).then((identifies: any) => {
              if (identifies) {
                this.isLock = false;
                //console.log(this.personIDs);
                identifies.forEach(identity => {
                  identity.candidates.forEach(person => {
                    if (this.personIDs.indexOf(person.personId) < 0) {
                      this.personIDs.push(person.personId);
                      this.faceService.GetPerson(this.personGroupId, person.personId).then((res: any) => {
                        console.log(res);
                        let person = res;
                        person.image = face;
                        let bodyReq = {
                          image: face,
                          citizenid: person.userData
                        };
                      });
                    }

                  });
                });
              } else {
                this.isLock = false;
              }
            });
          } else {
            this.isLock = false;
          }

        });
      }).catch(err => {

      });
    } catch{
      this.isLock = false;
    }

  }

  getCanvas(): HTMLCanvasElement {
    return <HTMLCanvasElement>document.getElementsByTagName('canvas')[0];
  }

  getVideo(): HTMLVideoElement {
    return <HTMLVideoElement>document.getElementsByTagName('video')[0];
  }

}
