import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesCardListComponent} from './courses-card-list.component';
import {CoursesModule} from '../courses.module';
import {COURSES} from '../../../../server/db-data';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {sortCoursesBySeqNo} from '../home/sort-course-by-seq';
import {Course} from '../model/course';
import {setupCourses} from '../common/setup-test-data';
import {by} from "protractor";
import {EPERM} from "constants";
import {transferArrayItem} from "@angular/cdk/drag-drop";




describe('CoursesCardListComponent', () => {

  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;
  let el : DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [CoursesModule]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoursesCardListComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement
      });
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });


  it("should display the course list", () => {
    component.courses = setupCourses();

    fixture.detectChanges();

    console.log(el.nativeElement.outerHTML);

    const cards = el.queryAll(By.css(".course-card"));

    expect(cards).toBeTruthy();
    expect(cards.length).toBe(12, "unexpected number of courses");


  });


  it("should display the first course", () => {
    component.courses = setupCourses();
    fixture.detectChanges();

    const firstCourse = component.courses[0];
    const card = el.query(By.css(".couse-card:first-child"));
    const title = card.query(By.css("mat-card-title"));
    const image = card.query(By.css("img"));

    expect(card).toBeTruthy("could not find course card");
    expect(title.nativeElement.textContent).toBe(firstCourse.titles.description, "incorrect title");
    expect(image.nativeElement.src).toBe(firstCourse.iconUrl)
  });


});


