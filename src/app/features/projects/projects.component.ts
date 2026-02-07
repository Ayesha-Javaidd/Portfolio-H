import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';
import { ProjectFilterComponent } from '../../components/shared/project-filter/project-filter.component';
import { ProjectCardComponent } from '../../components/shared/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectFilterComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
[x: string]: any;
  selectedProject: string | 'ALL' = 'ALL';
selected: any;

  constructor(public projectService: ProjectsService) {}

  onFilterChange(slug: string | 'ALL') {
    this.selectedProject = slug;
  }

  get allProjects() {
    return this.projectService.getProjects();
  }

  get selectedProjectData() {
    if (this.selectedProject === 'ALL') return null;
    return this.allProjects.find((p) => p.slug === this.selectedProject);
  }
}
